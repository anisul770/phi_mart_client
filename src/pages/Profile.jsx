import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const { register, watch, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue])

  const onSubmit = async (data) => {
    console.log(data);
    try {
      let msg = "";
      const profilePayload = {
        // Profile Update
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };
      const response1 = await updateUserProfile(profilePayload);
      if (response1.success ){
        msg+= response1.message;
      }
      // Password Change
      if (data.current_password && data.new_password) {
        const response2 = await changePassword({ current_password: data.current_password, new_password: data.new_password });
        if(response2.success){
          msg += response2.message
        }
      };
      setSuccessMsg(msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
      <div className="card-body">
        {errorMsg && <ErrorAlert error={errorMsg} />}
        {successMsg && <SuccessAlert successMsg={successMsg} />}
        <h2 className="card-title text-2xl mb-4">Profile Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm register={register} errors={errors} isEditing={isEditing} />
          <PasswordChangeForm errors={errors} register={register} isEditing={isEditing} watch={watch} />
          <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
};

export default Profile;