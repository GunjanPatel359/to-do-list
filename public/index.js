
displayForm=()=>{
    document.getElementById('form').style.display='flex';
}

cancelForm=()=>{
    document.getElementById('form').style.display='none';
}

const getAllTask = async () => {
    try {
        const res = await axios.get('/api/v1/user');
        document.getElementsByClassName('alltaskcontainer')[0].innerHTML=""
        const setting=res.data.tasks.map((e)=>{
            document.getElementsByClassName('alltaskcontainer')[0].innerHTML+=`<div class="tasks">
                        <div class="name">${e.name}</div>
                        <h3 class="taskName">${e.taskName}</h3>
                            <div class="btnGroup">
                            <a href='update.html?id=${e._id}' class="editBtn">Edit</a>
                            <button class="deleteBtn" onclick="deleteTask('${e._id}')">Delete</button>
                            </div>
                        </div>`
        })
    } catch (err) {
        console.log('Error:', err);
    }
};

getAllTask();

createTask = async () => {
    const name = document.getElementById('name').value;
    const taskName = document.getElementById('taskName').value;

    try {
        const response = await axios.post('/api/v1/user', {
            name: name,
            taskName: taskName
        });
        console.log('Task created:');
        cancelForm();
        getAllTask();
    } catch (err) {
        console.log(err);
    }
};


deleteTask=async(e)=>{
    try {
        const res=await axios.delete(`/api/v1/user/${e}`)
        console.log("task deleted succesfully");
        getAllTask();
    } catch (err) {
        console.log(err)
    }
}