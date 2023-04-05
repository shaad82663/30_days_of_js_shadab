const colors = [
    "#FF6633",  "#FFB399", "#FF33FF", "#FFFF99",
    "#00B3E6",  "#E6B333", "#3366E6", "#999966"
  ]
const skills = ['JavaScript','HTML' , 'CSS' , 'NodeJS', 'ExpressJS', 'ReacJS', 'Git & GitHub', 'mongodb']
const roles = ['Problem Solver','Back-end Developer', 'Software engineer', 'Photo Editor', 'Dancer']  

const totalColors = colors.length
const totalSkills = skills.length
const totalRoles = roles.length

//storing span elements for DOM manipulation
const skillSpan = document.querySelector('.skills')
const designationContainer = document.querySelector('.designation-div')
const skillsContainer = document.querySelector('.skill-para')

//Setting initial value for roles and skills
//intital role
var currRole = document.createElement('span')
currRole.className = 'roles'
currRole.textContent = 'Problems Solver'
designationContainer.appendChild(currRole)

//initial skill
var currSkill = document.createElement('span')
currSkill.textContent = 'JavaScript.'
currSkill.className = 'skills'
skillsContainer.appendChild(currSkill)

let i = 0
setInterval(() => {
    i++
    //creating new span for new role and skills
    const newRolesSpan = document.createElement('span')
    const newSkillSpan = document.createElement('span')

    newRolesSpan.className = 'roles'
    newRolesSpan.textContent = roles[i % (roles.length)]
    designationContainer.removeChild(currRole)
    designationContainer.appendChild(newRolesSpan)

    newSkillSpan.textContent = skills[i % (skills.length)]
    newSkillSpan.style.color = colors[i]
    newSkillSpan.className = 'skills'

    skillsContainer.removeChild(currSkill)
    skillsContainer.appendChild(newSkillSpan)
  
    currRole = newRolesSpan
    currSkill = newSkillSpan
}, 3000);