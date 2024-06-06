import React from 'react'
const UpdatedComponent=(OriginalComponent,incrNum)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
         incrCount=()=>{
          this.setState({
              count:this.state.count+incrNum
          })
         } 
         render()
         {
            return<OriginalComponent count={this.state.count} incrCount={this.incrCount} {...this.props}/>
         }
    }
    return NewComponent
}
export default UpdatedComponent