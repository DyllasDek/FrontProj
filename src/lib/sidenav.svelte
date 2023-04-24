<script lang="ts">
	import { base } from '$app/paths';
  import { page } from '$app/stores';
  
</script>
<div>
    <header>
        <h1>Academic Assignment Management</h1>
    </header>
    <nav>
        <ul>
            <li><a href="{base}/">Dashboard</a></li>
            <li><a href="{base}/assignments">Assignments</a></li>
            <li><a href="{base}/classes">Classes</a></li>
            {#if !$page.data.user}
            <li><a href="{base}/login">Login</a></li>
            <li><a href="{base}/register">Register</a></li>
            {:else}
            <li>
              <form action="/logout" method="POST">
                <button type="submit">Log out</button>
              </form>
            </li>
            {/if}
        </ul>
    </nav>
</div>


<style>
    /* Header */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  header h1 {
    margin: 0;
  }
  
  /* Navigation */
  nav {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
    
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    display: inline-block;
    margin-right: 20px;
  }
  
  nav a {
    color: #333;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
</style>
