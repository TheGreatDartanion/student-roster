d3.json('api/data/students').then(data => {

    data.forEach(student_data => {
             
        tbody = d3.select('#student-tbody')
        var row = tbody.append("tr");
                
        Object.values(student_data).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

    console.log(`In Script: ${db_name}`)
    
    var env_var = ENV['remote_db_user'];
    console.log(`ENVs: ${env_var}`)


});