import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const data = useSelector((i) => i.Profile.value);
  console.log(data);
  const Navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-500 grid gap-5 justify-center items-center p-3">
        <table>
          <thead className="grid grid-cols-5 gap-5 justify-center items-center">
            <th>Profile</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </thead>
          <tr className="grid grid-cols-5 gap-5 justify-center items-center">
            <td>{data?.Profile}</td>
            <td>{data?.id}</td>
            <td>{data?.name}</td>
            <td>{data?.gender}</td>
            <td>{data?.email}</td>
          </tr>
        </table>
        <div className="flex justify-center items-center gap-5 p-5">
          <Button
            className="!bg-emerald-600 !text-white"
            onClick={() => Navigate("/ProfileUpdate")}
          >
            UpDateProfile
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
