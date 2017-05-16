(function () {
    var myConnector = tableau.makeConnector();

 

myConnector.getSchema = function (schemaCallback) {
	
    var cols = [
        { id : "associates_rdb", 	alias : "associates_rdb", dataType : tableau.dataTypeEnum.string },
        { id : "association_type", 	alias : "association_type", dataType : tableau.dataTypeEnum.string },
        { id : "cc_email", 			alias : "cc_email", dataType : tableau.dataTypeEnum.string },
        { id : "created_at", 		alias : "created_at", dataType : tableau.dataTypeEnum.date },
        { id : "custom_field", 		alias : "custom_field", dataType : tableau.dataTypeEnum.string },
        { id : "deleted", 			alias : "deleted", dataType : tableau.dataTypeEnum.bool },
        { id : "delta", 			alias : "delta", dataType : tableau.dataTypeEnum.bool },



        { id : "dirty", 			alias : "dirty", dataType : tableau.dataTypeEnum.int },
        { id : "display_id", 		alias : "display_id", dataType : tableau.dataTypeEnum.int },
        { id : "due_by", 			alias : "due_by", dataType : tableau.dataTypeEnum.date },
        { id : "email_config_id", 	alias : "email_config_id", dataType : tableau.dataTypeEnum.string },
        { id : "frDueBy", 			alias : "frDueBy", dataType : tableau.dataTypeEnum.date },


		
		
        { id : "fr_escalated", 		alias : "fr_escalated", dataType : tableau.dataTypeEnum.bool },
        { id : "group_id", 			alias : "group_id", dataType : tableau.dataTypeEnum.string },
        { id : "id", 				alias : "id", dataType : tableau.dataTypeEnum.string },
        { id : "internal_agent_id", alias : "internal_agent_id", dataType : tableau.dataTypeEnum.string },
        { id : "internal_group_id", alias : "internal_group_id", dataType : tableau.dataTypeEnum.string },
        { id : "isescalated", 		alias : "isescalated", dataType : tableau.dataTypeEnum.bool },
        { id : "owner_id", 			alias : "owner_id", dataType : tableau.dataTypeEnum.string },


 
		 

        { id : "parent_ticket_id", 	alias : "parent_ticket_id", dataType : tableau.dataTypeEnum.string },
        { id : "priority", 			alias : "priority", dataType : tableau.dataTypeEnum.int },
        { id : "priority_name", 	alias : "priority_name", dataType : tableau.dataTypeEnum.string },
        { id : "product_id", 		alias : "product_id", dataType : tableau.dataTypeEnum.string },
        { id : "requester_id", 		alias : "requester_id", dataType : tableau.dataTypeEnum.string },
        { id : "requester_name", 	alias : "requester_name", dataType : tableau.dataTypeEnum.string },
        { id : "requester_status_name", 	alias : "requester_status_name", dataType : tableau.dataTypeEnum.string },
		
		
		

        { id : "responder_id", 		alias : "responder_id", dataType : tableau.dataTypeEnum.string },
        { id : "responder_name", 	alias : "responder_name", dataType : tableau.dataTypeEnum.string },
        { id : "sl_escalation_level", 	alias : "sl_escalation_level", dataType : tableau.dataTypeEnum.string },
        { id : "sl_manual_dueby", 	alias : "sl_manual_dueby", dataType : tableau.dataTypeEnum.date		},
        { id : "sl_merge_parent_ticket", 	alias : "sl_merge_parent_ticket", dataType : tableau.dataTypeEnum.string },
        { id : "sl_product_id", 	alias : "sl_product_id", dataType : tableau.dataTypeEnum.string },
        { id : "sl_skill_id", 		alias : "sl_skill_id", dataType : tableau.dataTypeEnum.string },
		
		
	
	    { id : "sl_sla_policy_id", 	alias : "sl_sla_policy_id", dataType : tableau.dataTypeEnum.string },
        { id : "sla_state", 		alias : "sla_state", dataType : tableau.dataTypeEnum.int },
        { id : "source", 			alias : "source", dataType : tableau.dataTypeEnum.int },
        { id : "source_name", 		alias : "source_name", dataType : tableau.dataTypeEnum.string },
        { id : "spam", 				alias : "spam", dataType : tableau.dataTypeEnum.bool },
        { id : "st_survey_rating", 	alias : "st_survey_rating", dataType : tableau.dataTypeEnum.string },
        { id : "status", 			alias : "status", dataType : tableau.dataTypeEnum.int },
		
		
		
		
		{ id : "status_name", 		alias : "status_name", dataType : tableau.dataTypeEnum.string },
        { id : "subject", 			alias : "subject", dataType : tableau.dataTypeEnum.string },
        { id : "ticket_type", 		alias : "ticket_type", dataType : tableau.dataTypeEnum.string },
        { id : "to_email", 			alias : "to_email", dataType : tableau.dataTypeEnum.string },
		{ id : "to_emails", 		alias : "to_emails", dataType : tableau.dataTypeEnum.string } ,
		
 
         { id : "trained", 			alias : "trained", dataType : tableau.dataTypeEnum.string },
        { id : "updated_at", 		alias : "updated_at", dataType : tableau.dataTypeEnum.date },		
		{ id : "urgent", 			alias : "urgent", dataType : tableau.dataTypeEnum.string }
		        
 
    ];
 
    var tableInfo = {
        id : "FreshDesk",
        alias : "FreshDesk",
        columns : cols
    };

    schemaCallback([tableInfo]);
};





myConnector.getData = function(table, doneCallback) {
	
	 
	
	
	        $.ajax(
          {
            url: "https://platform161.freshdesk.com/helpdesk/tickets/filter/all_tickets?format=json&page=2",
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
			headers: {"Authorization": "Basic " + btoa('zSeFFLYr2Gp9kKTEJs' + ":" + 'X')},
            success: function(data, textStatus) {
				
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = data.length; i < len; i++) {
            tableData.push({

                


	"associates_rdb"	: data[i].associates_rdb,
	"association_type"	: data[i].association_type,
	"cc_email"			: data[i].cc_email,
	"created_at"		: data[i].created_at,
	"custom_field"		: data[i].custom_field,
	"deleted"			: data[i].deleted,
	"delta"				: data[i].delta,
	
	
 
	"dirty"				: data[i].dirty,
	"display_id"		: data[i].display_id ,
	"due_by"			: data[i].due_by,
	"email_config_id"	: data[i].email_config_id,
	"frDueBy"			: data[i].frDueBy,

		
	"fr_escalated"		: data[i].fr_escalated,
	"group_id"			: data[i].group_id,
	"id"				: data[i].id,
	"internal_agent_id"	: data[i].internal_agent_id,
	"internal_group_id"	: data[i].internal_group_id,
	"isescalated"		: data[i].isescalated,
	"owner_id"			: data[i].owner_id,
 
	
	"parent_ticket_id"	: data[i].parent_ticket_id,
	"priority"			: data[i].priority,
	"priority_name"		: data[i].priority_name,
	"product_id"		: data[i].product_id,
	"requester_id"		: data[i].requester_id,
	"requester_name"	: data[i].requester_name,
	"requester_status_name": data[i].requester_status_name,
	
	"responder_id"		: data[i].responder_id,
	"responder_name"	: data[i].responder_name,
	"sl_escalation_level": data[i].sl_escalation_level,
	"sl_manual_dueby"	: data[i].sl_manual_dueby ,
	"sl_merge_parent_ticket": data[i].sl_merge_parent_ticket,
	"sl_product_id"		: data[i].sl_product_id,
	"sl_skill_id"		: data[i].sl_skill_id,
	
	
	"sl_sla_policy_id"	: data[i].sl_sla_policy_id,
	"sla_state"			: data[i].sla_state,
	"source"			: data[i].source,
	"source_name"		: data[i].source_name,
	"spam"				: data[i].spam,
	"st_survey_rating"	: data[i].st_survey_rating,
	"status"			: data[i].status,
	
	
	"status_name"		: data[i].status_name,
	"subject"			: data[i].subject,
	"ticket_type"		: data[i].ticket_type,
	"to_email"			: data[i].to_email,
	"to_emails"			: data[i].to_emails,
 
	"trained"			: data[i].trained,
	"updated_at"		: data[i].updated_at,		
	"urgent"			: data[i].urgent	

            });
        }

        table.appendRows(tableData);
        doneCallback();

	
            },
            error: function(jqXHR, tranStatus) {
              alert(jqXHR.status);
            }
          }
        );
	

};
  tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Freshdesk Feed";
        tableau.submit();
    });
});







})();

