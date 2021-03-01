import styled,{ createGlobalStyle  } from 'styled-components';


export const Chatbox = styled.div`
    width:290px;
    background:#fff;
    border-radius:6px;
    overflow:hidden;
    height:484px;
    position:absolute;
    top:100px;
    left:50%;
    margin-left:-155px;
`

export const P = styled.p`

`

export const Strong = styled.strong`
  font-weight:600;
  font-size:15px;
  color:#597a96;
  margin-left: 4%;

`
export const Search = styled.div`
	background:#e3e9ed url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/search.png") -11px 0 no-repeat;
	height:60px;
	width:290px;
	position:absolute;
	bottom:0;
	left:0;
`

export const SearchField = styled.input`
	background:#e3e9ed;
	margin:21px 0 0 55px;
	border:none;
	padding:0;
	font-size:14px;
	font-family:"Open Sans", sans-serif; 
	font-weight:400px;
	color:#8198ac;
`


export const Friendlist = styled.div`
	position:absolute;
	top:0;
	left:0;
	width:290px;
	height:484px;
`
export const Topmenu = styled.div`
	height:69px;
	width:290px;
	border-bottom:1px solid #d8dfe3;
`

export const Status = styled.div`
	background:#26c281;
    border-radius:50%;	
    width:9px;
    height:9px;
    position:absolute;
    top:25%;
    right:17px;
    ${props => props.className === 'away' && `
        background:#ffce54;
    `}
    ${props => props.className === 'inactive' && `
        background:#eaeef0;
    `}
`

export const Span = styled.span`

    ${props => props.className === 'Friends' && `
        float:left;	
        width: 96px; 
        height: 70px;   
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/top-menu.png") -3px -118px no-repeat;           
    `}
    ${props => props.className === 'Chat' && `
        
        float:left;	
        width: 96px; 
        height: 70px;   
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/top-menu.png") -3px -118px no-repeat;   
        background-position:-95px 25px; cursor:pointer;
    `}
    
    ${props => props.className === 'History' && `
        float:left;	
        width: 96px; 
        height: 70px;   
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/top-menu.png") -3px -118px no-repeat;   
        background-position:-190px 24px; cursor:pointer;
    `}

${props => props.className === 'SubName' && `
	font-size:13px;
	font-weight:400;
	color:#aab8c2; 
    margin-left: 4%;
    `
    }

`
export const Friend = styled.div`
	height:50px;
	border-bottom:1px solid #e7ebee;		
	position:relative;
    

    

    &:hover & {
        background:#f1f4f6;
        cursor:pointer;
    }

`

export const Friendimg = styled.img`
    width:40px;
    border-radius:50%;
    margin-left: 10px;


    float:left;
    src: ${props => props.src};

    
`