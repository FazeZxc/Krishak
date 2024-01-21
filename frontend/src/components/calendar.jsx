import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';




export function Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker orientation="landscape"
                closeOnSelect="false"
                displayWeekNumber='true' />
        </LocalizationProvider>
    );
}