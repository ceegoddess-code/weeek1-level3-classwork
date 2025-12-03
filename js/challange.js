const students = [
    {name: "Aaliyah", score:80, city: "North carolina"},
    {name: "Aaron", score:65, city: "California"},  
    {name: "Abbigail", score:90, city: "Florida"},
    {name: "Adam", score:55, city: "Texas"},
    {name: "Adrian", score:75, city: "New York"},

];

 const MIN PASSING GRADE =70,



    function getPassingStudentsNames(list) {
        const result =[]
      
        
        for (let i = 0; i < list.length; i++) {
            const student = list[i];

            if (student.score >= MIN_PASSING_GRADE) {
                result.push(student.name);
            }
    }
    return result;
    }

    const passingStudentsNames = getPassingStudentsNames(students);
    console.log(passingStudentsNames);

    function getAverageScoreByCity(list, city) {
        let totalScore = 0;
        let count = 0;

        for (let i = 0; i < list.length; i++) {
            const student = list[i];

            if (student.city === city) {
                totalScore += student.score;
                count++;
            }
        }

        if (count === 0) {
            return 0;
        }
        return totalScore / count;
    }   

    const averageByCity = getAverageScoreByCity(students, "California");
    console.log("averageByCity", averageByCity.toFixed(2));

function buildCitySummary(list) {

    return {};
}

console.log("citySummary", buildCitySummary(students));
