const template = document.createElement('template');

template.innerHTML = `
  <div id="scene-container" style="
        position: fixed;
        width: 100vw;
        display: flex;
		flex-direction: row;
		color: white;
        background-color: #0a0a0a;
        ">
        <div class='logo'>
            <h3>three.js tutorial</h3>
        </div>
        <ul>
            <li> <a href="/">Home</a></li>
            <li><a href="cube.html" >Cube</a></li>
            <li><a href="lines.html" >Lines</a></li>
            <li><a href="text.html" >Text</a></li>
        </ul>
       
    </div>
`;

document.body.appendChild(template.content);