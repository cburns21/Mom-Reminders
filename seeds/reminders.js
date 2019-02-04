
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reminders').del()
    .then(function () {
      // Inserts seed entries
      return knex('reminders').insert([
        {
          name: "Laundry",
          description: "Your laundry is getting moldy."
      },
      {
          name: "Work",
          description: "Pay your Bills. Do you really want to move back in with mom??"
      },
      {
          name: "Gym",
          description: "Hmmmmm, those pants are getting kinda tight."
      },
      {
          name: "School",
          description: "Can't always count on a sugar daddy. Turn off that damned Netflix and do some homework. "
      },
      {
          name: "Groceries",
          description: "You're looking a little skinny, fridge is empty again. Make sure you buy something green this time."
      },
      {
          name: "Clean",
          description: "How are you going to get a boyfriend if you cant even clean your room?"
      },
      {
          name: "Socialize",
          description: "When was the last time you saw the sun?"
      },
      {
          name: "Pets",
          description: "How are you going to take care of a pet if you can't even take care of yourself?"
      },
      {
          name: "Trash",
          description: "Time to take out all the trash, including that good for nothing ex."
      },
      {
          name: "That Thing",
          description: "Remember that thing you didn't want to go to but agreed to anyways? It's time."
      },
      {
          name: "Call Mom",
          description: "One of these days I'm not going to be around, then you'll miss me."
      }
      ]);
    });
};


// .then(() => {
//   return knex.raw('SELECT setval('methods_id_seq', (SELECT))
// })

