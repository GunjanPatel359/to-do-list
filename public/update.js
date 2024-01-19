getTask=async()=>{
    const ID=window.location.search.split("=")[1]
    console.log(ID)
    try {
        const a=await axios.get(`/api/v1/user/${ID}`)
        document.getElementById('taskID').innerHTML=a.data.tasks._id;
        document.getElementById('updatename').value=a.data.tasks.name;
        document.getElementById('updatetaskName').value=a.data.tasks.taskName;
        if(a.data.tasks.completed){
            document.getElementById('taskcomplete').checked = true;
        }
    } catch (err) {
        console.log(err)
    }
}

getTask();

updateTask=async()=>{
    const ID=document.getElementById('taskID').innerHTML;
    const updatename = document.getElementById('updatename').value;
    const updatetaskName = document.getElementById('updatetaskName').value;
    const complete=document.getElementById('taskcomplete').checked;
    try {
        const res = await axios.patch(`/api/v1/user/${ID}`, {
            name: updatename,
            taskName: updatetaskName,
            completed:complete,
        });
        console.log('Task updated successfully:');
        getTask();
        window.location.href = 'index.html';
    } catch (err) {
        console.log(err);
    }
}