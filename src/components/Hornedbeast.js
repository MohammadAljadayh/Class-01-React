import React from 'react';
class Hornedbeast extends React.Component {
render (){
    return (
<div>

   <h2>{this.props.title}</h2>
   <p>{this.props.description}</p>
   <img src={this.props.imgUrl}/>
</div>
    )
}  
}

export default Hornedbeast;