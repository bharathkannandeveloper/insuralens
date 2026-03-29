// premium-engine.js — Realistic Premium Calculation Engine
const PremiumEngine = {
  ageBands: [[0,17,"child"],[18,25,"18-25"],[26,30,"26-30"],[31,35,"31-35"],[36,40,"36-40"],[41,45,"41-45"],[46,50,"46-50"],[51,55,"51-55"],[56,60,"56-60"],[61,65,"61-65"],[66,99,"66+"]],
  getAgeBand(age){for(const[min,max,band]of this.ageBands)if(age>=min&&age<=max)return band;return"66+"},
  
  // Zone A=metros, B=tier1, C=tier2/rural
  zoneFactors:{A:1.0,B:0.92,C:0.85},
  
  // Pincode→Zone mapping (first 2-3 digits)
  pincodeZones:{
    "11":"A","12":"B","13":"B","14":"B","15":"B","16":"B","17":"C",
    "20":"B","21":"B","22":"B","23":"C","24":"C","25":"C","26":"B","27":"C","28":"C",
    "30":"B","31":"C","32":"C","33":"C","34":"C","35":"C","36":"C","37":"C",
    "40":"A","41":"A","42":"B","43":"C","44":"B","45":"C","46":"C",
    "50":"A","51":"B","52":"C","53":"B","54":"C","55":"C","56":"A",
    "60":"A","61":"B","62":"C","63":"C","64":"B","65":"C","66":"C","67":"B","68":"B","69":"C",
    "70":"A","71":"C","72":"C","73":"C","74":"C","75":"C","76":"C","77":"C","78":"C","79":"C",
    "80":"B","81":"C","82":"C","83":"C","84":"C","85":"C",
    "90":"B","91":"C","92":"C","93":"C","94":"C","95":"C",
    "110":"A","122":"A","201":"A","400":"A","500":"A","560":"A","600":"A","700":"A","411":"A",
    "380":"A","302":"B","226":"B","160":"A","141":"B","144":"B","208":"B",
    "682":"B","695":"B","641":"B","625":"C","636":"C"
  },
  
  getZone(pincode){
    pincode=String(pincode);
    if(this.pincodeZones[pincode.substring(0,3)])return this.pincodeZones[pincode.substring(0,3)];
    if(this.pincodeZones[pincode.substring(0,2)])return this.pincodeZones[pincode.substring(0,2)];
    return"C";
  },
  
  getCityFromPincode(pincode){
    const map={"110":"New Delhi","122":"Gurugram","201":"Noida/Ghaziabad","400":"Mumbai","411":"Pune","500":"Hyderabad","560":"Bengaluru","600":"Chennai","700":"Kolkata","380":"Ahmedabad","302":"Jaipur","226":"Lucknow","160":"Chandigarh","141":"Ludhiana","144":"Amritsar","208":"Kanpur","682":"Kochi","695":"Thiruvananthapuram","641":"Coimbatore","625":"Madurai","636":"Salem","800":"Patna","440":"Nagpur","421":"Thane","395":"Surat","360":"Rajkot","390":"Vadodara","452":"Indore","462":"Bhopal","482":"Jabalpur","530":"Visakhapatnam","520":"Vijayawada","516":"Kadapa","570":"Mysuru","580":"Hubli-Dharwad","590":"Belgaum","610":"Thanjavur","620":"Tiruchirappalli","630":"Sivaganga","643":"Ooty","670":"Kannur","680":"Thrissur","690":"Kollam","781":"Guwahati","795":"Imphal","831":"Jamshedpur","834":"Ranchi","753":"Cuttack","751":"Bhubaneswar","826":"Dhanbad","845":"Muzaffarpur","812":"Bhagalpur"};
    pincode=String(pincode);
    for(const[prefix,city]of Object.entries(map))if(pincode.startsWith(prefix))return city;
    return null;
  },

  // Pre-existing diseases with loading factors
  pedList:[
    {id:"diabetes",name:"Diabetes",loading:0.20,icon:"🩸"},
    {id:"hypertension",name:"Hypertension / High BP",loading:0.15,icon:"❤️‍🩹"},
    {id:"thyroid",name:"Thyroid Disorder",loading:0.10,icon:"🦋"},
    {id:"asthma",name:"Asthma / COPD",loading:0.15,icon:"🫁"},
    {id:"heart_disease",name:"Heart Disease / Cardiac",loading:0.40,icon:"🫀"},
    {id:"cancer",name:"Cancer (any type)",loading:0.50,icon:"🎗️"},
    {id:"kidney",name:"Kidney Disease",loading:0.35,icon:"🫘"},
    {id:"liver",name:"Liver Disease",loading:0.30,icon:"🫁"},
    {id:"stroke",name:"Stroke / Paralysis",loading:0.45,icon:"🧠"},
    {id:"arthritis",name:"Arthritis / Joint Disease",loading:0.12,icon:"🦴"},
    {id:"obesity",name:"Obesity (BMI > 30)",loading:0.15,icon:"⚖️"},
    {id:"cholesterol",name:"High Cholesterol",loading:0.10,icon:"🧪"},
    {id:"pcos",name:"PCOS / Hormonal",loading:0.08,icon:"♀️"},
    {id:"mental",name:"Mental Health / Depression",loading:0.12,icon:"🧠"},
    {id:"hiv",name:"HIV / AIDS",loading:0.60,icon:"🔬"},
    {id:"epilepsy",name:"Epilepsy",loading:0.20,icon:"⚡"},
    {id:"ulcer",name:"Peptic Ulcer / GI Disorder",loading:0.10,icon:"🫃"},
    {id:"spine",name:"Spine / Back Disorder",loading:0.15,icon:"🦴"}
  ],

  getPEDLoading(pedIds){
    if(!pedIds||pedIds.length===0)return 0;
    let total=0;
    for(const id of pedIds){const p=this.pedList.find(x=>x.id===id);if(p)total+=p.loading;}
    return Math.min(total,1.0); // cap at 100% max loading
  },

  // Relationship multipliers for family floater
  relationFactors:{
    "self":1.0,"spouse":0.85,"son":0.35,"daughter":0.35,
    "father":1.45,"mother":1.40,"father-in-law":1.45,"mother-in-law":1.40
  },

  genderFactor(gender,age){
    if(gender==="female"&&age<40)return 0.97;
    if(gender==="male"&&age>50)return 1.03;
    return 1.0;
  },

  calculateAge(dob){
    const today=new Date();const birth=new Date(dob);
    let age=today.getFullYear()-birth.getFullYear();
    const m=today.getMonth()-birth.getMonth();
    if(m<0||(m===0&&today.getDate()<birth.getDate()))age--;
    return age;
  },

  calculatePremium(plan,member,coverAmount,pincode){
    const age=typeof member.age==="number"?member.age:this.calculateAge(member.dob);
    const band=this.getAgeBand(age);
    const zone=this.getZone(pincode);
    const coverKey=this.getClosestCover(plan,coverAmount);
    
    if(!plan.premiumMatrix[band]||!plan.premiumMatrix[band][coverKey])return null;
    
    let base=plan.premiumMatrix[band][coverKey];
    base*=this.zoneFactors[zone];
    base*=this.genderFactor(member.gender,age);
    
    const pedLoad=this.getPEDLoading(member.peds);
    const pedAmount=Math.round(base*pedLoad);
    base+=pedAmount;
    
    const relFactor=this.relationFactors[member.relationship]||1.0;
    base*=relFactor;
    
    return{basePremium:Math.round(base),pedLoading:pedAmount,zone,ageBand:band,age};
  },

  getClosestCover(plan,amount){
    const covers=Object.keys(plan.premiumMatrix[Object.keys(plan.premiumMatrix)[0]])
      .map(Number).sort((a,b)=>a-b);
    for(const c of covers)if(c>=amount)return c;
    return covers[covers.length-1];
  },

  calculateTotalPremium(plan,members,coverAmount,pincode){
    let total=0;const breakdown=[];
    for(const m of members){
      const r=this.calculatePremium(plan,m,coverAmount,pincode);
      if(!r)continue;
      breakdown.push({...r,name:m.name,relationship:m.relationship});
      total+=r.basePremium;
    }
    // Family floater discount for 3+ members
    if(members.length>=3)total=Math.round(total*0.95);
    if(members.length>=5)total=Math.round(total*0.93);
    return{total,breakdown,gst:Math.round(total*0.18),grandTotal:Math.round(total*1.18)};
  }
};
