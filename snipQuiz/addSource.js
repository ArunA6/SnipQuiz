let count = 0;

function addSource(){
    var html =`<div id=source${count} class=\'source\'>
    Source file:<input type=file class=\'file\'>
    Start page:<input type=number class=\'startPage\'>
    End page:<input type=number class=\'endPage\'>
    <input type="checkbox" name="answerBool" class='answerBool' onclick=displayAnsOptions('source${count}'); checked> Set up answers
    <div style='display:blocked' class=ansOption> Answer source:<input type=file class=\'ansFile\'>
    Answers Start page:<input type=number class=\'startPageAns\'>
    Answers End page:<input type=number class=\'endPageAns\'></div>
    <button onclick=removeSource(\'source${count}\');>Remove source
    </div>`;
    
    document.getElementById("sources").innerHTML += html;

    count++;
}

function removeSource(sourceId){
    console.log(sourceId);
    var child = document.getElementById(sourceId);
    console.log(child);
    child.parentNode.removeChild(child);
}

function displayAnsOptions(sourceId){
    var checkBox = document.getElementById(sourceId).getElementsByClassName("answerBool")[0];

    var ansOptions = document.getElementById(sourceId).getElementsByClassName("ansOption")[0];
    
    console.log(ansOptions);
    if (checkBox.checked == true){
        ansOptions.style.opacity = "1";
        ansOptions.getElementsByClassName("ansFile")[0].disabled = false;
        ansOptions.getElementsByClassName("startPageAns")[0].disabled = false;
        ansOptions.getElementsByClassName("endPageAns")[0].disabled = false;
      } else {
        ansOptions.style.opacity = "0.2";
        ansOptions.getElementsByClassName("ansFile")[0].disabled = true;
        ansOptions.getElementsByClassName("startPageAns")[0].disabled = true;
        ansOptions.getElementsByClassName("endPageAns")[0].disabled = true;
      }

}