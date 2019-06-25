import model from '../models';

const { Donor } = model;

export const createDonor = async (req, res) => {
    const {
        firstName, lastName, email, phoneNo, lastCommsDate, methodOfComms, pastDonations
    } = req.body;
    
    console.log(req.body);
    const donorData = {
        firstName,
        lastName,
        email,
        phoneNo,
        lastCommsDate,
        methodOfComms,
        pastDonations
    };

    try {
        const newDonor = await Donor.create(donorData);
        
       return res.status(200).json({
            status: 'success',
            message: 'Donor created successfully',
            data: newDonor,
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.findAll();

        if (!donors) {
            return res.status(404).json({
                status: 'failed',
                message: 'No donor available at the moment'
            })
        }
        return res.status(200).json({
            status: 'success',
            message: 'Donors retreived successfully',
            data: donors
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateDonor = async (req, res) => {
    const { id } = req.params;

    const { lastCommsDate, methodOfComms } = req.body;

    try {
        const donor = await Donor.findOne({ where: { id }});

        if(!donor) {
            return res.status(404).json({
                status: 'failed',
                message: 'No donor available at the moment'
            });
        } 
        const updatedDonor = await Donor.update({
            lastCommsDate, methodOfComms
        }, { where: { id }});
       
        return res.status(200).json({
            status: 'success',
            message: 'Donor date and method of communications updated',
            data: updatedDonor
        });
    } catch (error) {
        console.log(error);
    }
}
