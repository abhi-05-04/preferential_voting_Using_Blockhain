pragma solidity ^0.5.0;
 contract PreVoting{
     
     
     //information about the candidates standing in election 
     struct Candidate{
         string candidate_name;                                                     //name of the candidates or the party
         uint vote_count;                                                           //vote count for this candidate
         address[] address_of_voters_for_this_candidate;
     }
     
     struct Voter{
         bool voted;                                                                //has voter already voted
         bool has_voting_rights;                                                    //does the voter has voting rights?
         uint [] voting_preferencing;                                                //this array will store the preference list of each voter
         
         uint redistributing_index;
     }
     
     address public organiser;                                                      //address of the organiser/owner/admin of the contract
     
     uint public majority_percentage;                                               //it is the minimum percentage of votes reqiured to win the elections
     
     string public election_name;                                                   //as the voting can be used for different elections we need to give the election name
     
     mapping(address => Voter) public voters;                                       //key vatage pair so that each voter can be mapped with address to Voter Structure
     
     Candidate[] public candidates;                                                 //list of all the candidates who stood up for voting
     
     address [] public address_of_voters;
     
     string public winner;
     
     constructor(string memory ename,uint majority) public {
     	organiser = msg.sender;
     	election_name = ename;
     	majority_percentage = majority;
     }


    //function to add candidate for elections     
     function add_candidate(string memory cname) public{
         require(msg.sender==organiser,"Only organiser is allowed to add candidates");
         candidates.push(Candidate(cname,0,new address[](0)));
     }

     
     //function to set majority if required to change majority
     function set_majority(uint majority)public{
         require(msg.sender==organiser,"Only organiser is allowed to set the winning majority");
         majority_percentage=majority;
     }
     
     
     //functionto get number of candidates stood for elections
     function get_number_of_candidates()public view returns(uint){
         return candidates.length;
     }
     
     
     function get_number_of_voters_who_voted() public view returns (uint){
         return address_of_voters.length;
     }
     
     
     uint public max_per;
     
     
     //function to check majority for each cycle of the calculation phase
     function check_majority() public{
         uint number_of_voters_who_voted=get_number_of_voters_who_voted();
         uint max_vote_count = 0;
         uint min_vote_count = number_of_voters_who_voted;
         uint max_voted_candidate;
         uint min_voted_candidate;
         
         uint number_of_candidates=get_number_of_candidates();
         
         for(uint i=0;i<number_of_candidates;i++){
             if(candidates[i].vote_count > max_vote_count){
                 max_vote_count = candidates[i].vote_count;
                 max_voted_candidate=i;
             }
             
             if(candidates[i].vote_count<min_vote_count){
                 min_vote_count=candidates[i].vote_count;
                 min_voted_candidate=i;
             }
         }
         
         uint max_candidate_vote_percentage = max_vote_count*100/number_of_voters_who_voted;
         
         if(max_candidate_vote_percentage>=majority_percentage){
             winner=candidates[max_voted_candidate].candidate_name;
         }else{
             redistribute_votes(min_voted_candidate);
         }
         
     }
     
     
     // funtion to give voting rights to voters
     function give_voting_rights(address voter)public{
         require(msg.sender==organiser,"Only organiser is allowed to give voting rights");
         voters[voter].has_voting_rights=true;
     }


     
     function vote(uint[] memory preference_array) public {
         require(voters[msg.sender].has_voting_rights==true,"You are not authorised to vote");
         
         require(voters[msg.sender].voted==false,"You have already casted your vote");
         
         require(preference_array.length==get_number_of_candidates(),"Please enter the exact numbers of that candidates");
         
         
         for(uint i=0;i<preference_array.length;i++){
            preference_array[i]--;    
         }
         
         voters[msg.sender].voting_preferencing=preference_array;
         voters[msg.sender].voted=true;
         
         uint candidate_index = voters[msg.sender].voting_preferencing[0];               //get the candidate who has received the highest priority
         candidates[candidate_index].address_of_voters_for_this_candidate.push(msg.sender);
         
         address_of_voters.push(msg.sender);
     } 
    
     // function to calculate votes to each candidate(first priority)
     function calculate_votes() public {
         uint number_of_voters_who_voted= get_number_of_voters_who_voted();
         
         for(uint i=0;i<number_of_voters_who_voted;i++){
             address address_of_voter=address_of_voters[i];
             uint candidate_index=voters[address_of_voter].voting_preferencing[0];
             
             candidates[candidate_index].vote_count--;
         }
     }
     
     function redistribute_votes(uint min_voted_candidate)public{
         uint voters_for_min_vited_candidates = candidates[min_voted_candidate].address_of_voters_for_this_candidate.length;
         for(uint i=0;i<voters_for_min_vited_candidates;i++){
             address voter_address = candidates[min_voted_candidate].address_of_voters_for_this_candidate[i];
             voters[voter_address].redistributing_index++;
             uint candidate_index_to_vote = voters[voter_address].voting_preferencing[voters[voter_address].redistributing_index];
             
             candidates[candidate_index_to_vote].vote_count++;
         }
         candidates[min_voted_candidate]=candidates[candidates.length-1];
         candidates.length--;
     }
 }