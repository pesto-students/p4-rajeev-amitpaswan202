const empOne = {
    id: 1,
    name: "Amit",
    startDate: "03/01/2022",
  };
  
  const empTwo = {
    id: 2,
    name: "deepak",
    startDate: "08/02/2022",
  };
  
  const empThree = {
    id: 3,
    name: "sonu",
    startDate: "22/01/2022",
  };
  
  function getempInfo(loc1, loc2, loc3) {
    console.log(
      `employe ${this.name}'s starts from ${this.startDate} and belongs ${loc1}, ${loc2} and ${loc3}`
    );
  }
  
  const locations = ["Bangalore", "Mumbai", "Delhi"];
  
  getempInfo.call(empOne, locations[0], locations[1], locations[2]);
  
  getempInfo.apply(empTwo, locations);
  
  const newGetempInfo = getempInfo.bind(
    empThree,
    locations[0],
    locations[1],
    locations[2]
  );
  newGetempInfo();