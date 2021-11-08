import signupSchema from '../lib/databaseSchema';
function RegisterUser(){
    let fullname = document.getElementById('name1').value;
    let adhaarno = document.getElementById('adhaarno').value;
    const newVoter = new signupSchema({
        Name:fullname,
        adhaarcard: adhaarno
    })
    newVoter.save()
    
}