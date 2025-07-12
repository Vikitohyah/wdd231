document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Responsive menu (add your own CSS toggle logic)
const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show');
});


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseContainer = document.getElementById("course-container");
const creditCount = document.getElementById("credit-count");
const buttons = document.querySelectorAll(".course-buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        renderCourses(button.dataset.subject);
    });
});

function renderCourses(subject = "all") {
    courseContainer.innerHTML = "";

    const filtered = subject === "all" ? courses : courses.filter(c => c.subject === subject);
    const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
    creditCount.textContent = totalCredits;

    filtered.forEach(course => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("course-wrapper");

        const smallButton = document.createElement("button");
        smallButton.classList.add("subject-btn");
        smallButton.innerHTML = `${course.subject} ${course.number}`;
        if (course.completed) {
            smallButton.classList.add("completed");
        }


        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("course-card", "collapsed");
        if (course.completed) {
            detailsDiv.classList.add("completed");
        }

        detailsDiv.innerHTML = `
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p class="status">${course.completed ? "Completed" : "Incomplete"}</p>
        `;

        smallButton.addEventListener("click", () => {
            detailsDiv.classList.toggle("collapsed");
        });

        wrapper.appendChild(smallButton);
        wrapper.appendChild(detailsDiv);
        courseContainer.appendChild(wrapper);
    });
}

// Render all courses on load
renderCourses();