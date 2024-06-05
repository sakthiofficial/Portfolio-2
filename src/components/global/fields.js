import { Grid, TextField, MenuItem } from "@mui/material";
import { Theme, useTheme, styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "black",
    },
  },
}));
export function InputField({
  value,
  handleonChange,
  error,
  required,
  lable,
  type,
  borderColor,
  color,
  multipleLine,
}) {
  return (
    <Grid container item xs={12} sx={{ minHeight: "1rem", height: "100%" }}>
      <TextField
        variant="outlined"
        fullWidth
        label={lable || `Enter Details${required ? "*" : ""}`}
        value={value}
        onChange={(e) => handleonChange(e.target.value)}
        type={type}
        multiline={multipleLine}
        minRows={multipleLine ? 3 : null}
        InputProps={{
          sx: {
            background: "#FFFFFF",
            height: "100%",
          },
        }}
        sx={{
          height: "100%",
          padding: "0px",
          textTransform: "capitalize",
          fontSize: "14px",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: borderColor || "black",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: color || "black",
              textTransform: "capitalize",
            },
          },
        }}
        error={error}
      />
    </Grid>
  );
}

export function DropDownMenu({
  lable,
  handleOnChange,
  options,
  value,
  required,
}) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <Grid container item xs={12} sx={{ minHeight: "3rem", heigth: "100%" }}>
      <CustomFormControl sx={{ width: "100%", height: "100%" }} error={false}>
        <InputLabel id="demo-multiple-name-label">{lable}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          SelectDisplayProps={value}
          value={value}
          onChange={handleOnChange}
          input={<OutlinedInput label={lable} />}
          MenuProps={MenuProps}
          sx={{ borderRadius: "10px" }}
          onBeforeInput="red"
        >
          {(options || []).map((option) => (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </CustomFormControl>
    </Grid>
  );
}
