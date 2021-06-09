const React = require("react");
const Layout = require("./Layout");

function Home() {
return (
    <Layout title="Home">
        <body>

        <h1> Find a spot for your car!</h1>
        
        <ul>

          <li>
            <a href="/api/parkcar">
              <button type="submit">Park your car</button>
            </a>
            <br/>
          </li>
          <li>
            <a href="/api/unpark">
              <button type="submit" >Unpark car</button>
            </a>
            <br/>
          </li>
          <li>
            <a href="/api/cheskspots">
              <button type="submit" >Check available spot</button>
            </a>
            <br/>
          </li>

        </ul>


        </body>
       


    </Layout>


)




}

module.exports = Home;