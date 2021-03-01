import { log } from "console";
import React,{ useState } from "react";

import { Chatbox, Friendlist, Topmenu, Span, Friend, Friendimg, P, Strong, Status, Search, SearchField } from './ChatboxStyled';



export const Chat: React.FC = () => {

  const [searchtext,setSearchText] = useState("Buscar...");


  return (
    <Chatbox>

      <Friendlist>
        <Topmenu>
          <Span className="Friends" />
          <Span className="Chat" />
          <Span className="History" />          
        </Topmenu>        

        <Friend onClick={()=>{ }}>    
        <Friendimg src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
          <P> 
            <Strong>
              Antonio Divino
            </Strong> <br></br>
            <Span className="SubName">
              antoniodiv@gmail.com
            </Span>         
          </P>
          <Status />
        </Friend> 
        <Search>
          <SearchField value={searchtext} onChange={e=>{ setSearchText(e.target.value)}} />
        </Search>
      </Friendlist>


    </Chatbox>
  );
};


