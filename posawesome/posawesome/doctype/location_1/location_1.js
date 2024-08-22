// Copyright (c) 2024, Youssef Restom and contributors
// For license information, please see license.txt

frappe.ui.form.on('Location-1', {
	onload(frm){
        frm.set_query("pos_profile", function (doc) {
			return {
				filters: {  
					custom_location_1: true,
				},
			};
		});
    }
});
