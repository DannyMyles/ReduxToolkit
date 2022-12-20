import './App.css'
import { AddCampaign } from './components/add/AddCampaign';
import { SingleCampaign } from './components/single/SingleCampaign';
import { useCampaignsQuery } from './services/campaignsAPi'

function App() {
  const { data, error, isFetching,isLoading, isSuccess } = useCampaignsQuery();

  return (
    <div className="App">
     <h1>RTK Query</h1>
     {isLoading && <h2> ...Loading</h2> }
     { isFetching && <h2> ...isFetching</h2> }
     { error && <h2>Something went wrong</h2> }
     { isSuccess && (
      <div>
         { data?.map(campaign =>{
          return <div className='data' key={campaign.id}>
              <span>{campaign.title}</span>
              <span><SingleCampaign id={campaign.id} /></span>
          </div>
         })}
      </div>
     )}
     <AddCampaign />
    </div>
  )
}

// export the comapign id

export default App
