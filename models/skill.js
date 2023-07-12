const skills = [
    {id: 5829, skill: 'Built Twitter', done: true},
    {id 6743, skill: 'Bit Coin Developement', done: false},
    {id 8211:, skill: 'Guinuess World Record for Fastest Debugging', done: true}
    ];

    function getAll() {
        return skills; 
      }
    function getOne(id) {
      id = parseInt(id);
    
      return skills.find(skill => skills.id === id);
    }
      module.exports = {
        getAll,
        getOne
      };
      