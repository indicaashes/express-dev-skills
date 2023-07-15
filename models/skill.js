const skills = [
    {id: 5829, skill: 'Built Twitter', done: true},
    {id 6743, skill: 'Bit Coin Developement', done: false},
    {id 8211:, skill: 'Guinuess World Record for Fastest Debugging', done: true}
    ];

    module.exports = {
      getAll,
      getOne,
      create,
      deleteOne,
      update
    };
    
    function update(id, updatedSkill) {
      id = parseInt(id);
      const skill = skills.find(skill => skill.id === id);
      Object.assign(skill, updatedSkill);
    }
    
    function deleteOne(id) {
      id = parseInt(id);
      const idx = skills.findIndex(skill => skill.id === id);
      skills.splice(idx, 1);
    }
    
    function create(skill) {
      skill.id = Date.now() % 1000000;
      skill.done = false;
      skills.push(skill);
    }
    
    function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
    }
    
    function getAll() {
      return skills;
    }