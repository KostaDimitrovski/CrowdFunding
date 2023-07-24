import axios from '../custom-axios/axios';

const CrowdFundingService = {

    fetchCEOs: () => {
        return axios.get("/ceos/list");
    },

    fetchCategories: () => {
        return axios.get("/categories/list");
    },

    fetchCompanies: () => {
        return axios.get("/companies/list ");
    },

    deleteCompany: (id) => {
        return axios.delete(`/companies/delete/${id}`)
    },

    addCompany: (name, category, ceoId, fundingNeeded, fundingTillNow, aboutTheCompany, logoURL) => {

        return axios.post("/companies/add", {

            "name": name,
            "category": category,
            "ceoId": ceoId,
            "fundingNeeded": fundingNeeded,
            "fundingTillNow": fundingTillNow,
            "aboutTheCompany": aboutTheCompany,
            "logoUrl": logoURL

        });
    },

    fundACompany: (id, money) => {
        return axios.post(`/companies/addFunding/${id}`, JSON.stringify(money), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },


    editCompany: (id, name, category, ceoId, fundingNeeded, fundingTillNow, aboutTheCompany, logoURL) => {

        return axios.put(`/companies/edit/${id}`, {
            "name": name,
            "category": category,
            "ceoId": ceoId,
            "fundingNeeded": fundingNeeded,
            "fundingTillNow": fundingTillNow,
            "aboutTheCompany": aboutTheCompany,
            "logoUrl": logoURL
        });

    },

    getCompany: (id) => {
        return axios.get(`/companies/${id}`);
    },

    login: (email, password) => {
        return axios.post("/login", {
            "email": email,
            "password": password
        })
    },
    register: (firstname, lastname, email, password) => {
        return axios.post("/register", {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        })
    },

    email: (name, email, text) => {
        return axios.post("/email/send", {
            "name": name,
            "email": email,
            "text": text
        })
    }
}

export default CrowdFundingService