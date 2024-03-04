class CarlosGur {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.skills = [];
      this.isHappy = true;
    }
  
    learnSkill(skill) {
      this.skills.push(skill);
      console.log(`${this.name} learns a new skill: ${skill}`);
    }
  
    performTask(task) {
      if (this.isHappy) {
        console.log(`${this.name} happily performs the task: ${task}`);
      } else {
        console.log(`${this.name} is not in the mood to perform tasks right now.`);
      }
    }
  
    celebrateBirthday() {
      this.age++;
      console.log(`Happy Birthday to ${this.name}! Now ${this.name} is ${this.age} years old.`);
    }
  
    changeOccupation(newOccupation) {
      this.occupation = newOccupation;
      console.log(`${this.name} now works as a ${newOccupation}.`);
    }
  
    toggleMood() {
      this.isHappy = !this.isHappy;
      console.log(`${this.name} is now ${this.isHappy ? 'happy' : 'not happy'}.`);
    }
  }
  
  // Example usage:
  const carlos = new CarlosGur('Carlos Gur', 30, 'Magician');
  carlos.learnSkill('Teleportation');
  carlos.performTask('Vanishing Act');
  carlos.celebrateBirthday();
  carlos.changeOccupation('Illusionist');
  carlos.toggleMood();
  carlos.performTask('Sleight of Hand');
  