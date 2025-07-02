import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignInForm } from "../../hooks/forms/use-sign-in-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findUserByUsername, users, type User } from "@/data";

export function SignInForm() {
  const { user, handleSetUser, handleChange, onFormSubmit, isLoggingIn } = useSignInForm();

  return (
    <Card className="w-full max-w-2xl shadow-none">
      <form onSubmit={onFormSubmit}>
        <CardHeader className="text-center">
          <CardTitle>LOGIN NON PENYEDIA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="my-3">
            <SelectDefaultUser users={users} onChange={(user) => handleSetUser(user)} />
          </div>
          <fieldset disabled={isLoggingIn} className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              <Field
                label="Username"
                name="userName"
                value={user?.userName}
                onChange={handleChange}
              />
              <Field
                label="Real Name"
                name="realName"
                value={user?.realName}
                onChange={handleChange}
              />
              <Field label="Phone" name="phone" value={user?.phone} onChange={handleChange} />
              <Field label="Email" name="email" value={user?.email} onChange={handleChange} />
              <Field label="LPSE ID" name="lpseId" value={user?.lpseId} onChange={handleChange} />
              <Field label="Role" name="role" value={user?.role} onChange={handleChange} />
              <Field
                label="Instansi ID"
                name="idInstansi"
                value={user?.idInstansi}
                onChange={handleChange}
              />
              <Field
                label="Instansi Name"
                name="namaInstansi"
                value={user?.namaInstansi}
                onChange={handleChange}
              />
              <Field
                label="Satker ID"
                name="idSatker"
                value={user?.idSatker}
                onChange={handleChange}
              />
              <Field
                label="Satker Name"
                name="namaSatker"
                value={user?.namaSatker}
                onChange={handleChange}
              />
              <Field
                label="Bidang ID"
                name="idBidang"
                value={user?.idBidang}
                onChange={handleChange}
              />
              <Field label="Bidang" name="bidang" value={user?.bidang} onChange={handleChange} />
            </div>
          </fieldset>
        </CardContent>
        <CardFooter className="mt-3 flex-col">
          <Button
            disabled={isLoggingIn}
            type="submit"
            className="w-full bg-green-700 mt-3 cursor-pointer"
          >
            {isLoggingIn ? "Loading..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

function SelectDefaultUser(props: { users: User[]; onChange?: (user?: User) => void }) {
  const { users, onChange } = props;

  return (
    <Select onValueChange={(u) => onChange?.(findUserByUsername(u))}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih Default User" />
      </SelectTrigger>
      <SelectContent>
        {users.map((user, index) => (
          <SelectItem key={index} value={user.userName}>
            {user.realName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} className="text-sm font-medium mb-1">
        {label}
      </Label>
      <Input id={name} name={name} value={value} onChange={onChange} type="text" />
    </div>
  );
}
