"use strict"

class sma_data_getter
{
	constructor()
	{

	}

	get_data()
	{
		var associativeArray = [];

		for (let i = 0; i < stakeholder_detailinfo.length; i++)
		{
			var stakeholder_category = stakeholder_detailinfo[i].stakeholder_category;
			
			for (let j = 0; j < stakeholder_category.length; j++)
			{
				var stakeholderss = [];
				var cat = {cat:stakeholder_category[j].label, stakeholders:stakeholderss};

				if(associativeArray.length > 0)
				{
					var bla = true;

					for (let k = 0; k < associativeArray.length; k++)
					{
						if(stakeholder_category[j].label == associativeArray[k].cat)
						{
							associativeArray[k].stakeholders.push(stakeholder_detailinfo[i]);
							bla = false;
							break;
						}
					}
					if (bla === true)
					{
						cat.stakeholders.push(stakeholder_detailinfo[i]);
						associativeArray.push(cat);
					}
				}
				else
				{
					cat.stakeholders.push(stakeholder_detailinfo[i]);
					associativeArray.push(cat);
				}
			}
		}

		return associativeArray;
	}
}

//module.exports = function()
//{
//	var a = new sma_data_getter();
//	return a;
//}
