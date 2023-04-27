const exercises = 
[
    {
        id: 1,
        img: "./Assets/images/benchpress.jpg",
        name: "bench press",
        muscleTarget: "chest",
    },
    {
        id: 2,
        img: "./Assets/images/pullover.png",
        name: "pull over",
        muscleTarget: "back",
    },
    {
        id: 3,
        img: "./Assets/images/squat.png",
        name: "squats",
        muscleTarget: "legs",
    },
    {
        id: 4,
        img: "./Assets/images/curlhammer.jpg",
        name: "hammer curls",
        muscleTarget: "biceps",
    },
    {
        id: 5,
        img: "./Assets/images/pushdown.jpg",
        name: "push down",
        muscleTarget: "triceps",
    },
    {
        id: 6,
        img: "./Assets/images/skullcrushers.png",
        name: "skull crushers",
        muscleTarget: "shoulders",
    },
]

//target the main section (where the items are going to be displayed)

const mainSection = document.querySelector('.main-section');

//Retrieve the DOM (using DOMContentLoaded) when page is loaded
window.addEventListener('DOMContentLoaded', function(){
    displayExercisesItems(exercises);
    console.log(displayExercises);
});

function displayExercisesItems(exerciseItems){
    //Use map method in order to be able to modify our objects.
    //let displayExercises = exercise.map(function(exercise) exercise keyword changed by exerciseItems as parameter to be passed.
    let displayExercises = exerciseItems.map(function(exercise){
        //template string to be able to write html code in js
        //We start accessing the objects by each property.
        return `<article class="exercise-item">
        <img src=${exercise.img} alt="chest" class="graphic">
        <div class="exercise-info">
            <header>
                <h4>${exercise.name}</h4>
                <h4>${exercise.muscleTarget}</h4>
            </header>
            <h4>Exercise to add to your rutine</h4>
        </div>
    </article>`
    });
    //Use join method to place the item together
    displayExercises = displayExercises.join('');
    //Display items in the html document by selecting the parent that is mainSection and passing the displayExercises to it.
    mainSection.innerHTML = displayExercises;
};