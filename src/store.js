const uuid = require('uuid/v4')

const bookmarks = [
    {
        id:uuid(),
        title: 'abc',
        url: 'http://www.abc.com',
        description:'aaa bbb ccc',
        rating:'3'
    },
    {
        id:uuid(),
        title: 'abc123',
        url: 'http://www.abc123.com',
        description:'aaaadasd bbb ccc',
        rating:'2'
    },
    {
        id:uuid(),
        title: 'abc123',
        url: 'http://www.123.com',
        description:'aaa basdasdb ccc',
        rating:'4'
    }
]
module.exports = {bookmarks}