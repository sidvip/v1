function addVideoRobotGrasping() {
    document.getElementsByClassName('middle-pane')[0].innerHTML = `<div class="inside-middle-pane" style="text-align:center;position:relative"></div>`;
    document.getElementsByClassName('inside-middle-pane')[0].innerHTML = `
    <span id="contentHeading" style="padding-top:100px;"> Robotic Grasping in Clutter </span>
    <span id="contentInsideHeading">
    UR-5 picking objects in Dense Clutter on different background, using unsupervised learning. 
    No prior information of objects are known to system. It identifies and detects the grasp regions and object location using point cloud information
    given by Kinect. It applies a constant gripping force to hold objects. All the objects used are standard 
    <a href="http://pwurman.org/amazonpickingchallenge/results.shtml"
                            style="text-decoration: none;">Amazon Picking Challenge 2016</a> &
                            <a href="https://www.robocup2017.org/eng/amazon_robitics.html"
                            style="text-decoration: none;">Amazon Robotics Challenge 2017</a>objects. 
            </span>
      
     <table class="video-table">
        <tr>
            <td class="table-heading"><span id="contentHeading"> Real Robot Grasping </span></td>
            <td class="table-heading"><span id="contentHeading"> Kinect View </span></td>
        </tr>
        <tr>
            <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/fLyEEp4vjBo?autoplay=0"
            frameborder="0" allowfullscreen></iframe></td>
            <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/Wv0Vq-z6vt0?autoplay=0"
            frameborder="0" allowfullscreen></iframe></td>
        </tr>
        <tr>
            <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/9Ha-Xq8isik?autoplay=0"
            frameborder="0" allowfullscreen></iframe></td>
            <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/VcFDMeB3fVQ?autoplay=0"
            frameborder="0" allowfullscreen></iframe></td>
        </tr>
        <tr>
        <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/_FJz5rkliKE?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/_iwJKELXzqI?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        </tr>        
        <tr><td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/vEctN_ufcEk?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/RDFRnslogbg?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td></tr>
        <tr>
        <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/yXsuHLbjjhM?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/F2qHf6v2nGU?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        </tr>
        <tr>
        <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/4nk0EeBtfYU?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/ucGlKfug6to?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        </tr>
        <tr>
        <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/NJAA3OJgBQ8?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/R9IdOfectIo?autoplay=0"
        frameborder="0" allowfullscreen></iframe></td>
        </tr>
     </table>
    `;

}

function addProjectVideo() {
    document.getElementsByClassName('middle-pane')[0].innerHTML = `<div class="inside-middle-pane" style="text-align:center;"></div>`;
    document.getElementsByClassName('inside-middle-pane')[0].innerHTML = `
    &nbsp;&nbsp;&nbsp;&nbsp;
        <span id="contentHeading"> Will be posted soon .............. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
    `;
}

function addDiv(e) {
    let button = e.target.classList[0];
    let newDivValue = document.getElementsByClassName(button)[0].innerText;
    document.getElementsByClassName('extreme-right')[0].innerHTML = newDivValue;
    if (newDivValue.toLowerCase().includes('robot')) {
        addVideoRobotGrasping();
    } else if (newDivValue.toLowerCase().includes('old')) {
        addProjectVideo();
    }
}

function navButtonClick() {
    let buttonclasses = document.querySelectorAll('.button-class');
    for (let i = 0; i < buttonclasses.length; i++) {
        buttonclasses[i].addEventListener('click', addDiv);
    }
}


navButtonClick();
