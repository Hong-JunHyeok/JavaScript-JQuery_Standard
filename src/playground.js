function CheckWeight(name , height , weight){
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.maxWeight;
  this.minWeight;
  
  this.prototype.getInfo = () => {
    let str = "";
    str += "이름" + this.userName + ",";
    str += "키:" + this.userHeight + ",";
    str += "몸무게:" + this.userWeight + "<br>";

    return str;
  }

  this.prototype.getResult = () => {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if(this.userWeight >= this.minWeight && this.minWeight <= this.maxWeight){
      return "정상 몸무게입니다.";
    }else if(this.userWeight < this.minWeight){
      return "정상  몸무게보다 미달입니다.";
    }else{
      return "정상 뭄무게보다 초과입니다.";
    }
  }
}