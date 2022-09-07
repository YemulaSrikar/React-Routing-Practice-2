// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <div>
        <ul>
          {blogsList.map(eachList => (
            <BlogItem eachBlog={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BlogList
