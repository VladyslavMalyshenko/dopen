import React, { useEffect } from "react";

import "../../styles/components/UI/serverThumbnailTemplate.scss"
import { useNavigate, useParams } from "react-router-dom";

type ServerProps = {
    image: string,
    name: string,
    id: number
}

const Server = ({ image, name, id }: ServerProps) => {
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const servers = document.querySelectorAll('.server');

        servers.forEach((server) => {
          server.classList.remove('active');
        });

        const activeServer = document.getElementById(`${params.id}`);

        if (activeServer) {
            activeServer.classList.add('active');
        }
      }, [params.id]);

    
    const redirectToServer = (id: number) => {
        navigate(`/server/${id}`)
    }
    
    return (
        <div onClick={() => redirectToServer(id)} className="server" id={`${id}`}>
            <div data-name={name} className="server-icon">
                <img className="server-icon-img" alt={name} src={image} />
            </div>
        </div>
    )
}

export default Server;