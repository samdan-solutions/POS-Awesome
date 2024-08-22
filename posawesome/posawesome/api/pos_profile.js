// Copyright (c) 20201 Youssef Restom and contributors
// For license information, please see license.txt

frappe.ui.form.on('POS Profile', {
    setup: function (frm) {
        frm.set_query("posa_cash_mode_of_payment", function (doc) {
            return {
                filters: { 'type': 'Cash' }
            };
        });
    },
    custom_location(frm){
        if(frm.doc.custom_location){
            frm.set_value("custom_location_1", false)
        }
    },
    custom_location_1(frm){
        if(frm.doc.custom_location_1){
            frm.set_value("custom_location", false)
        }
    }
});