module.exports = {
  show : function(){
    for (const name in Game.creeps) {
      const creep = Game.creeps[name];
      console.log(`${creep.name} has ${creep.hits} hit points.`);
    }

  }
  };