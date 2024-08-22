frappe.ui.form.on("Location", {
    onload(frm){
        frm.set_query("custom_pos_profile", function (doc) {
			return {
				filters: {  
					custom_location: true,
				},
			};
		});
    }
})