import { useCampaignQuery } from '../../services/campaignsAPi';

export const SingleCampaign =({id}: {id:number}) =>{
  const {data} = useCampaignQuery(id);
  return (
    <pre>
      {JSON.stringify(data, undefined, 2)}
    </pre>
  )
}
