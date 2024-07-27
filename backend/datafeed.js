const mongoose = require("mongoose")
const { Schema } = mongoose;
const {Payment} = require("./models/user");

const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const feedUserData = async () => {
  const users = [
    {
      userId: "1",
      propertyId: "1000",
      taxId: "5000",
      paymentDate: "2024-07-01",
      amountPaid: 1200,
      paymentStatus: "Success"
    },
    {
      userId: "2",
      propertyId: "1001",
      taxId: "5001",
      paymentDate: "2024-07-02",
      amountPaid: 300,
      paymentStatus: "Failure"
    },
    {
      userId: "3",
      propertyId: "1002",
      taxId: "5002",
      paymentDate: "2024-07-03",
      amountPaid: 150,
      paymentStatus: "Success"
    },
    {
      userId: "4",
      propertyId: "1003",
      taxId: "5003",
      paymentDate: "2024-07-04",
      amountPaid: 1100,
      paymentStatus: "Success"
    },
    {
      userId: "5",
      propertyId: "1004",
      taxId: "5004",
      paymentDate: "2024-07-05",
      amountPaid: 250,
      paymentStatus: "Failure"
    },
    {
      userId: "6",
      propertyId: "1005",
      taxId: "5005",
      paymentDate: "2024-07-06",
      amountPaid: 180,
      paymentStatus: "Success"
    },
    {
      userId: "7",
      propertyId: "1006",
      taxId: "5006",
      paymentDate: "2024-07-07",
      amountPaid: 1300,
      paymentStatus: "Failure"
    },
    {
      userId: "8",
      propertyId: "1007",
      taxId: "5007",
      paymentDate: "2024-07-08",
      amountPaid: 270,
      paymentStatus: "Success"
    },
    {
      userId: "9",
      propertyId: "1008",
      taxId: "5008",
      paymentDate: "2024-07-09",
      amountPaid: 160,
      paymentStatus: "Failure"
    },
    {
      userId: "10",
      propertyId: "1009",
      taxId: "5009",
      paymentDate: "2024-07-10",
      amountPaid: 1400,
      paymentStatus: "Success"
    },
    {
      userId: "11",
      propertyId: "1010",
      taxId: "5010",
      paymentDate: "2024-07-11",
      amountPaid: 200,
      paymentStatus: "Failure"
    },
    {
      userId: "12",
      propertyId: "1011",
      taxId: "5011",
      paymentDate: "2024-07-12",
      amountPaid: 1100,
      paymentStatus: "Success"
    },
    {
      userId: "13",
      propertyId: "1012",
      taxId: "5012",
      paymentDate: "2024-07-13",
      amountPaid: 500,
      paymentStatus: "Success"
    },
    {
      userId: "14",
      propertyId: "1013",
      taxId: "5013",
      paymentDate: "2024-07-14",
      amountPaid: 600,
      paymentStatus: "Failure"
    },
    {
      userId: "15",
      propertyId: "1014",
      taxId: "5014",
      paymentDate: "2024-07-15",
      amountPaid: 800,
      paymentStatus: "Success"
    },
    {
      userId: "16",
      propertyId: "1015",
      taxId: "5015",
      paymentDate: "2024-07-16",
      amountPaid: 400,
      paymentStatus: "Failure"
    },
    {
      userId: "17",
      propertyId: "1016",
      taxId: "5016",
      paymentDate: "2024-07-17",
      amountPaid: 1500,
      paymentStatus: "Success"
    },
    {
      userId: "18",
      propertyId: "1017",
      taxId: "5017",
      paymentDate: "2024-07-18",
      amountPaid: 250,
      paymentStatus: "Success"
    },
    {
      userId: "19",
      propertyId: "1018",
      taxId: "5018",
      paymentDate: "2024-07-19",
      amountPaid: 190,
      paymentStatus: "Failure"
    },
    {
      userId: "20",
      propertyId: "1019",
      taxId: "5019",
      paymentDate: "2024-07-20",
      amountPaid: 1300,
      paymentStatus: "Success"
    },
    {
      userId: "21",
      propertyId: "1020",
      taxId: "5020",
      paymentDate: "2024-07-21",
      amountPaid: 300,
      paymentStatus: "Failure"
    },
    {
      userId: "22",
      propertyId: "1021",
      taxId: "5021",
      paymentDate: "2024-07-22",
      amountPaid: 1200,
      paymentStatus: "Success"
    },
    {
      userId: "23",
      propertyId: "1022",
      taxId: "5022",
      paymentDate: "2024-07-23",
      amountPaid: 650,
      paymentStatus: "Failure"
    },
    {
      userId: "24",
      propertyId: "1023",
      taxId: "5023",
      paymentDate: "2024-07-24",
      amountPaid: 800,
      paymentStatus: "Success"
    },
    {
      userId: "25",
      propertyId: "1024",
      taxId: "5024",
      paymentDate: "2024-07-25",
      amountPaid: 1000,
      paymentStatus: "Success"
    },
    {
      userId: "26",
      propertyId: "1025",
      taxId: "5025",
      paymentDate: "2024-07-26",
      amountPaid: 150,
      paymentStatus: "Failure"
    },
    {
      userId: "27",
      propertyId: "1026",
      taxId: "5026",
      paymentDate: "2024-07-27",
      amountPaid: 400,
      paymentStatus: "Success"
    },
    {
      userId: "28",
      propertyId: "1027",
      taxId: "5027",
      paymentDate: "2024-07-28",
      amountPaid: 1200,
      paymentStatus: "Failure"
    },
    {
      userId: "29",
      propertyId: "1028",
      taxId: "5028",
      paymentDate: "2024-07-29",
      amountPaid: 1500,
      paymentStatus: "Success"
    },
    {
      userId: "30",
      propertyId: "1029",
      taxId: "5029",
      paymentDate: "2024-07-30",
      amountPaid: 300,
      paymentStatus: "Failure"
    },
    {
      userId: "31",
      propertyId: "1030",
      taxId: "5030",
      paymentDate: "2024-07-31",
      amountPaid: 800,
      paymentStatus: "Success"
    },
    {
      userId: "32",
      propertyId: "1031",
      taxId: "5031",
      paymentDate: "2024-08-01",
      amountPaid: 500,
      paymentStatus: "Failure"
    },
    {
      userId: "33",
      propertyId: "1032",
      taxId: "5032",
      paymentDate: "2024-08-02",
      amountPaid: 1000,
      paymentStatus: "Success"
    },
    {
      userId: "34",
      propertyId: "1033",
      taxId: "5033",
      paymentDate: "2024-08-03",
      amountPaid: 300,
      paymentStatus: "Failure"
    },
    {
      userId: "35",
      propertyId: "1034",
      taxId: "5034",
      paymentDate: "2024-08-04",
      amountPaid: 1200,
      paymentStatus: "Success"
    },
    {
      userId: "36",
      propertyId: "1035",
      taxId: "5035",
      paymentDate: "2024-08-05",
      amountPaid: 700,
      paymentStatus: "Failure"
    },
    {
      userId: "37",
      propertyId: "1036",
      taxId: "5036",
      paymentDate: "2024-08-06",
      amountPaid: 1500,
      paymentStatus: "Success"
    },
    {
      userId: "38",
      propertyId: "1037",
      taxId: "5037",
      paymentDate: "2024-08-07",
      amountPaid: 250,
      paymentStatus: "Failure"
    },
    {
      userId: "39",
      propertyId: "1038",
      taxId: "5038",
      paymentDate: "2024-08-08",
      amountPaid: 200,
      paymentStatus: "Success"
    }
  ]
  

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    for (const user of users) {
      const newUser = new Payment(user);
      await newUser.save();
      console.log('User created:', newUser);
    }

    console.log('All users created');
  } catch (error) {
    console.error('Error creating users:', error);
  } finally {
    mongoose.disconnect();
  }
};

feedUserData();