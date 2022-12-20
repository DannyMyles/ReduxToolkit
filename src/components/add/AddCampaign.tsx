import { useAddCampaignMutation,useCampaignQuery, useCampaignsQuery } from "../../services/campaignsAPi";

export const AddCampaign = () => {
  const [addCampaign] = useAddCampaignMutation();
  const {refetch} = useCampaignsQuery()
  const campaign = {
    "id": 4,
    "title": "Mpesa Express",
    "description": " Add new description for the campaign",
  };
  const addHander = async () => {
    await addCampaign(campaign);
    refetch()
  };
  return (
    <>
      <form className="add-form">
        <div>
          <label>Title</label>
          <input type="text" placeholder="Add Title" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" placeholder="Add Description" />
        </div>
        <button onClick={addHander}>Add Campaign</button>
      </form>
    </>
  );
};
