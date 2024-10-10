const template = document.createElement('template');

template.innerHTML = `
  <div id="scene-container" style="
        position: fixed;
        width: 100vw;
        display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
        background-color: #000;
        ">
        <ul>
            <li> <a href="/">Home</a></li>
            <li><a href="/cube.html" >Cube</a></li>
            <li>Right click to pan</li>
        </ul>
       
    </div>
`;

document.body.appendChild(template.content);