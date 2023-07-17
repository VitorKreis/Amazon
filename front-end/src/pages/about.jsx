import './about.css';

import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

function about() {
  return (

    <div className="container">
        <div className="card">
            <span>Hello, this website, is a project create for study so it's not a real e-comerce</span>
            <span>If you like to the project, please enter in my github and give your comment or your star</span>
            <span>If you find any errors or if you have any suggestions, please contact me via my instagram</span>
            <div className="icons">
            <a label="GitHub" href="https://github.com/VitorKreis" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
            <a label="GitHub" href="https://www.instagram.com/vitorkrei/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
            </div>
            <span>Thanks to see this project</span>
        </div>
    </div>

  );
}

export default about;
