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
            <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/fLyEEp4vjBo?autoplay=1"
            frameborder="0" allowfullscreen></iframe></td>
            <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/Wv0Vq-z6vt0?autoplay=1"
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
    document.getElementsByClassName('middle-pane')[0].innerHTML = `<div class="inside-middle-pane" style="text-align:center;position:initial;"></div>`;
    document.getElementsByClassName('inside-middle-pane')[0].innerHTML = `
    <span id="contentHeading" style="padding-top:100px;"> Manipulator Configuration Space </span>
    <span id="contentInsideHeading">
        It was my first animated project in MATLAB. In this we are drawing <a href="https://www.cs.cmu.edu/~motionplanning/lecture/Chap3-Config-Space_howie.pdf"
         style="text-decoration: none;"> Configuration Space</a> of two link manipulator which is placed among the obstacles. The manipulator has
         2 degree of freedom that is why the configuration space has 2 dimensional plot. In configuration space, the same color is denoting the 
         collision of robot with that color obstacle. Rest of the color is simply showing the non-collision zone of robot.
    </span>
    <table class="video-table">
    <tr>
    <td class="table-heading"><span id="contentHeading"> Manipulator Workspace </span></td>
    <td class="table-heading"><span id="contentHeading"> Configuration Space </span></td>
    </tr>
    <tr>
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/wIY0vmXf3BE?autoplay=1"
    frameborder="0" allowfullscreen></iframe></td>
    <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/8lvCUK3cBWA?autoplay=1"
    frameborder="0" allowfullscreen></iframe></td>
    </tr>
    </table>

    <span id="contentHeading" style="padding-top:100px;"> Rapidly-exploring random tree </span>
    <span id="contentInsideHeading">
        Here, we have used <a href="http://msl.cs.illinois.edu/~lavalle/papers/Lav98c.pdf"
        style="text-decoration: none;"> RRT </a>  to plan the path of mobile robot in different workspaces.  Every algorithm is completed in different number 
        of iterations. We have used only one point tree generation for planning the path for faster planning two point tree generation can be
        used. 
    </span>
    <table class="video-table">
    <tr style="text-align:center;">
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/5gV-P4nt048?autoplay=0"
    frameborder="0" allowfullscreen></iframe> <span class="general-bold">Single Point Tree Generation
    <br>Number of Iterations : 1000</span></td>
    <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/uUIyWGl_d7w?autoplay=0"
    frameborder="0" allowfullscreen></iframe> <span class="general-bold">Two Point Tree Generation
    <br>Number of Iterations : 200</span></td>
    </tr>
    <tr style="text-align:center;">
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/7favRKNxcsk?autoplay=0"
    frameborder="0" allowfullscreen></iframe> <span class="general-bold">Single Point Tree Generation
    <br>Number of Iterations : 2500</span></td>
    <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/3zIF-PMZPKc?autoplay=0"
    frameborder="0" allowfullscreen></iframe> <span class="general-bold">Single Point Tree Generation
    <br>Number of Iterations : 1200</span></td>
    </tr>
    <tr style="text-align:center;">
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/FuEZ1Uxf97Q?autoplay=0"
    frameborder="0" allowfullscreen></iframe> <span class="general-bold">Single Point Tree Generation
    <br>Number of Iterations : 4825</span></td>
    <td class="video-support-pane"> <span class="general-bold">NoI depends on the random 
    points sampling positions so, we get different values at almost every run.</span></td>
    </tr>
    </table>

    <span id="contentHeading" style="padding-top:100px;"> Artificial Potential Field Path Planning</span>
    <span id="contentInsideHeading">
        Here, we have used <a href="https://www.cs.mcgill.ca/~hsafad/robotics/"
        style="text-decoration: none;"> Potential Field  Algorithm</a>  to plan the path of mobile robot in different workspaces.  In this
        algorithm, target and robot has force of attraction while the robot and obstacle has force of repulsion. If these two forces come
        in line then the problem of local minima occurs.</span>
    <table class="video-table">
    <tr>
    <td class="table-heading"><span id="contentHeading"> Manipulator Workspace </span></td>
    <td class="table-heading"><span id="contentHeading"> Configuration Space </span></td>
    </tr>
    <tr>
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/ZAFhE9vPAZY?autoplay=0"
    frameborder="0" allowfullscreen></iframe></td>
    <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/B1bwDn2GzIc?autoplay=0"
    frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/3szX17D8x84?autoplay=0"
    frameborder="0" allowfullscreen></iframe></td>
    <td class="video-support-pane"> <span class="general-bold"> Here it is easily visible that both of the forces i.e, attraction
    and repulsion are inline so robot is stuck at local minima. One of the ways to eliminate it using tangetial force.</span></td>
    </tr>

    </table>

    <span id="contentHeading" style="padding-top:100px;"> 3 Dimensional Path Planning</span>
    <span id="contentInsideHeading">
        Here, we have used <a href="https://www.cs.mcgill.ca/~hsafad/robotics/"
        style="text-decoration: none;"> Potential Field  Algorithm</a>  to plan the path of aerial robot in 3 dimensional space.  We have shown
        the path planning for two different initial points to target point.  Potential field algorithms used the heuristics to deicide the 
        factors used in their potential functions, if not chosen correctly, chances of high repulsion or weird behaviour is found in generated path.
        Due to poor selection a high amount of jerks are encountered by robot in workspace.
        </span>
    <table class="video-table">
    <tr>
    <td class="table-heading"><span id="contentHeading"> Manipulator Workspace </span></td>
    <td class="table-heading"><span id="contentHeading"> Configuration Space </span></td>
    </tr>
    <tr>
    <td class="video-support-pane"><iframe class="video-pane" src="https://www.youtube.com/embed/6AuAL4lhkGk?autoplay=0"
    frameborder="0" allowfullscreen></iframe></td>
    <td class="video-support-pane"><iframe class="algo-pane" src="https://www.youtube.com/embed/Af1Ecq0HD9Y?autoplay=0"
    frameborder="0" allowfullscreen></iframe></td>
    </tr>
    </table>

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
