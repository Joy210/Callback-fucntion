const data = [{
    isAuthenticated: true,
    name: 'Sohnaur Rahman',
    designation: 'UI/UX Designer',
    email: 'sohanoor404@gmail.com',
    phone: '123 456 789'
}, {
    isAuthenticated: true,
    name: 'Siyam AL Galid',
    designation: 'Software Engineer',
    email: 'siyam404@gmail.com',
    phone: '123 456 789'
}];

function getposts() {
    let output = '';
    data.forEach((post, index) => {
        output +=
            `<div class="col-4 ">
                <div class="card card-body bg-warning">
                    <ul class="list-group lead text-white" style="font-size: 18px">
                        <li class="list-group-item bg-dark"> <span class="text-warning font-weight-bold">Name:</span> ${ post.name } </li>
                        <li class="list-group-item bg-dark"> <span class="text-warning font-weight-bold">Designation:</span> ${ post.designation } </li>
                        <li class="list-group-item bg-dark"> <span class="text-warning font-weight-bold">Email:</span> ${ post.email } </li>
                        <li class="list-group-item bg-dark"> <span class="text-warning font-weight-bold">Phone:</span> ${ post.phone } </li>
                    </ul>
                </div>
            </div>`;
    });
    // console.log(output);
    const showData = document.getElementById('demo');
    showData.innerHTML = output;
}

function createPost(post, callback) {
    data.push(post);
    callback();
};

const insertValue = {
    name: 'S. Rahman',
    designation: 'ReactJS Developer',
    email: 'joy404@gmail.com',
    phone: '123 456 789'
};

createPost(insertValue, getposts);


// const data = {
//     isAuthenticated: true,
//     name: 'Sohnaur Rahman',
//     designation: 'UI/UX Designer',
//     email: 'sohanoor404@gmail.com',
//     phone: '123 456 789'
// };
// function info(person, callback) {
//     console.log(data);
//     console.log('Name: ' + person.name);
//     if (person.isAuthenticated) {
//         callback(person.email, person.designation);
//         console.log('User is authenticated :)');
//     } else {
//         console.log('User is not authenticated!!!');
//     }
// }

// info(data, function (email, designation) {
//     console.log('Email is sent to : ' + email);
//     console.log('Designation : ' + designation);

// });