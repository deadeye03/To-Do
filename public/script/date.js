const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const option2={hour:'numeric',minute:'numeric',second:'numeric'}
const option3={weekday: 'long', month: 'long',day:'numeric'}
const today=new Date();
exports.day=today.toLocaleDateString('en-us',option3) 
exports.onlyDate=today.toLocaleDateString('en-us',{day:'numeric'}) 