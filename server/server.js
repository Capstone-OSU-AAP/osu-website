var contactFieldsArray =  [
    { name : "_id", display_name: 'Source_Id', visible: false, reactiveSearchFields: ['_id']},
    { name: "address", display_name: 'Address', visible: true,
      fields: ["address","country", "province", "postal_code",	"type", "province", "postal_code"],
      reactiveSearchFields: ['address']
    },
    { name: "birth_date", display_name: 'Date of Birth', visible: true, reactiveSearchFields: ['birth_date']},
    { name: "city", display_name: 'City', visible: true, default: true, reactiveSearchFields: ['city']},
    { name: "contact_sub_type", display_name: 'Contact Sub-type', visible: true,
      options: [null,
              "International Friend of Equal Education",
              "",
              "Youth",
              "Activist",
              "Staff",
              "South African Friend of Equal Education",
              "Civil Society",
              "Other",
              "Media",
              "Bookery",
              "Government Official",
              "Parent",
              "International Government",
              "Teacher"],
              reactiveSearchFields:['contact_sub_type']
    },
    { name: "contact_type", display_name: 'Contact Type', visible: true, default: true,
      options:[ "Individual", "Organization", "" ],reactiveSearchFields:['contact_type']

    },
    { name: "country", display_name: 'Country', visible: true, reactiveSearchFields:['country']},
    { name: "cellphone", display_name: 'Cellphone', visible: true, default: true, reactiveSearchFields:['cellphone']},
    { name: "date_of_joining_ee", display_name: 'Date of Joining EE', visible: true,reactiveSearchFields:['date_of_joining_ee']},
    { name: "deceased_date", display_name: 'Deceased Date', visible: false,reactiveSearchFields:['deceased_date'] },
    { name: "display_name", display_name: 'Preferred Name', visible: true,reactiveSearchFields:['display_name']},
    { name: "do_not_email", display_name: 'Do not email', visible: true, options:[ "True", "False", "" ],reactiveSearchFields:['do_not_email']},
    { name: "do_not_mail", display_name: 'Do not mail', visible: true, options:[ "True", "False", "" ],reactiveSearchFields:['do_not_mail'] },
    { name: "do_not_phone", display_name: 'Do not phone', visible: true, options:[ "True", "False", "" ],reactiveSearchFields:['do_not_phone']},
    { name: "do_not_sms", display_name: 'Do not sms', visible: true, options:[ "True", "False", "" ],reactiveSearchFields:['do_not_sms']},
    { name: "do_not_trade", display_name: 'Do not trade', visible: true, options:[ "True", "False", "" ],reactiveSearchFields:['do_not_trade']},
    { name: "email", display_name: 'Email', visible: true, default: true, reactiveSearchFields:['email']},
    { name: "first_name", display_name: 'First Name', visible: true, default: true, reactiveSearchFields:['first_name']},
    { name: "gender", display_name: 'Gender', visible: true, default: true,
      options:[ "Male", "Female", "" ], reactiveSearchFields:['gender']
    },
    { name: "grade", display_name: 'Grade', visible: true, reactiveSearchFields:['grade']},
    { name: "last_name", display_name: 'Last name', visible: true, default: true, reactiveSearchFields:['last_name']},
    { name: "legal_name", display_name: 'Legal Name', visible: true, reactiveSearchFields:['legal_name']},
    { name: "member", display_name: 'Member', visible: true,
      options:[ "Member", "" ], reactiveSearchFields:['member']
    },
    { name: "isMember", display_name: 'Is Member', visible: true,
      options:[ "false", "true" ], reactiveSearchFields:['isMember']
    },
    { name: "middle_name", display_name: 'Middle name', visible: true, default: true, reactiveSearchFields:['middle_name']},
    { name: "nick_name", display_name: 'Nick Name', visible: true, reactiveSearchFields:['nick_name']},
    { name: "note", display_name: 'Note', visible: true, reactiveSearchFields:['note']},
    { name: "organization_name", display_name: 'Organization Name', visible: true, reactiveSearchFields:['organization_name']},
    { name: "phone", display_name: 'Phone Numbers', visible: true, default: true,
      fields: ["type", "phone"], reactiveSearchFields:['phone']
    },
    { name: "postal_code", display_name: 'Postal Code', visible: true, reactiveSearchFields:['postal_code']},
    { name: "preferred_communication_method", display_name: 'Preferred communication method', visible: true, reactiveSearchFields:['preferred_communication_method']},
    { name: "preferred_language", display_name: 'Preferred Language', visible: true, reactiveSearchFields:['preferred_language']},
    { name: "province", display_name: 'Province', visible: true,
      options: ["",
                "Eastern Cape",
                "Free State",
                "Gauteng",
                "Kwazulu-Natal",
                "Mpumalanga",
                "Northern Cape",
                "Limpopo",
                "Western Cape",
                "North West"], reactiveSearchFields:['province']
    },
    { name: "school", display_name: 'School', visible: true, reactiveSearchFields:['school']},
    { name: "suburb", display_name: 'Suburb', visible: true, default: true, reactiveSearchFields:['suburb']},
    { name: "website", display_name: 'Website URL', visible: true, reactiveSearchFields:['website']},
    { name: "year_group", display_name: 'Year Group', visible: true, reactiveSearchFields:['year_group']},
    { name: "youth_group", display_name: 'Youth Group', visible: true, reactiveSearchFields:['youth_group']}];

    // { name: "image_URL", display_name: 'Image URL', visible: true},
    // { name: "legal_identifier", display_name: 'Legal Identifier', visible: true},

    // { name: "addressee_custom", display_name: 'Address - Custom', visible: false},
    // { name: "addressee_display", display_name: 'Address - Display', visible: false},
    // { name: "api_name", display_name: 'Identifier', visible: false},
    // { name: "email_greeting_custom", display_name: 'Email Greeting - Custom', visible: false},
    // { name: "email_greeting_display", display_name: 'Email Greeting - Display', visible: false},
    // { name: "email_greeting_id", display_name: 'Email Greeting - Id', visible: false},
    // { name: "employer_id", display_name: 'Employer Id', visible: false},
    // { name: "external_identifier", display_name: 'External Identifer', visible: false},

    // { name: "hash", display_name: 'Hash', visible: false},
    // { name: "household_name", display_name: 'Household Name', visible: false},
    // { name: "id", display_name: 'Id', visible: false},

    // { name: "postal_greeting_custom", display_name: 'Postal Greeting - Custom', visible: false},
    // { name: "postal_greeting_display", display_name: 'Postal Greeting - Display', visible: false},
    // { name: "postal_greeting_id", display_name: 'Postal Greeting - Id', visible: false},

    // { name: "preferred_mail_format", display_name: 'Preferred Mail Format', visible: false},
    // { name: "prefix_id", display_name: 'Prefix Id', visible: false},
    // { name: "primary_contact_id", display_name: 'Primary Contact Id', visible: false},

    // { name: "sic_code", display_name: 'Sic Code', visible: false},
    // { name: "sort_name", display_name: 'Sort Name', visible: false},
    // { name: "source", display_name: 'Source', visible: false},
    // { name: "suffix_id", display_name: 'Suffix Id', visible: false},


  Meteor.startup(function () {
    if (ContactFields.find().count() === 0) {
      console.log("Importing Contact Fields")
      contactFieldsArray.forEach(function(contactField) {
        ContactFields.insert(contactField);

      });
    }



  });
