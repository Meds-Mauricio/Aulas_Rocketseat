export function styles(theme: any): {
    root: (props: any) => {
        height: string;
        position: string;
        "& .DayPicker__firstDayUnlocked": {
            borderTop: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            margin: string;
        };
        "& .DayPicker__firstDayUnlockedMobileContainer": {
            display: string;
            flexGrow: number;
            justifyContent: string;
            alignItems: string;
        };
        "& .DayPicker__firstDayUnlockedMobile": {
            borderTop: string;
        };
        "& .DayPicker": {
            counterReset: string;
            fontFamily: any;
            position: string;
            margin: string;
        };
        "& .DayPicker__horizontal": {
            background: string;
            boxShadow: string;
        };
        "& .DayPicker__withBorder": {
            boxShadow: string;
        };
        "& .DayPickerNavigation__verticalScrollableDefault": {
            display: string;
        };
        "& .DateRangePicker": {};
        "& .DateRangePicker strong": {
            fontWeight: string;
        };
        "& .DateRangePicker b": {
            fontWeight: string;
        };
        "& .DateRangePickerInput": {
            border: string;
            display: string;
        };
        "& .DateRangePickerInput_arrow:before": {
            borderBottom: string;
            content: string;
            display: string;
            margin: string;
            opacity: number;
            width: string;
        };
        "& .DateRangePickerInput_arrow_svg": {
            display: string;
        };
        "& ._picker": {
            borderRadius: string;
        };
        "& ._picker__portal": {
            zIndex: any;
        };
        "& .DateInput": {
            background: string;
            width: string;
        };
        "& .DateInput_input": {
            color: any;
            cursor: string;
            fontFamily: string;
            padding: number;
            width: string;
        };
        "& .DateInput_input[value='']": {
            width: string;
        };
        "& .DateInput_input__focused": {
            borderColor: any;
        };
        "& .DateInput_fang": {
            top: string;
        };
        "& .CalendarMonth_caption": {
            fontFamily: any;
            fontSize: string;
            paddingLeft: string;
            textTransform: string;
        };
        "& .CalendarMonthGrid__horizontal": {
            top: string;
        };
        "& .DayPicker_transitionContainer": {
            height: string;
        };
        "& .DayPicker_weekHeaders": {
            top: string;
        };
        "& .DayPicker_weekHeader": {
            boxShadow: string;
            borderTop: string;
        };
        "& .DayPicker_weekHeader_li": {
            color: string;
            textTransform: string;
            fontWeight: string;
        };
        "& .DayPicker_weekHeader__verticalScrollable": {
            padding: string;
        };
        "& .DayPicker_weekHeader__verticalScrollable .DayPicker_weekHeader_ul": {
            display: string;
            justifyContent: string;
        };
        "& .DayPicker_weekHeader_ul": {
            padding: string;
        };
        "& .CalendarDay": {
            fontSize: string;
        };
        "& .CalendarDay__blocked_out_of_range": {
            background: string;
            border: string;
            position: string;
            zIndex: any;
        };
        "& .CalendarDay__blocked_out_of_range:active": {
            background: string;
            border: string;
            position: string;
            zIndex: any;
        };
        "& .CalendarDay__blocked_out_of_range:hover": {
            [x: number]: {
                background: string;
                border: string;
                position: string;
                zIndex: any;
            };
        };
        "& .CalendarDay__default:not(.CalendarDay__blocked_out_of_range):hover": {
            [x: number]: {
                border: string;
                position: string;
                color: any;
                zIndex: any;
                background: any;
                borderRadius: string;
            };
        };
        "& .CalendarDay__default.CalendarDay__selected_span:hover": {
            [x: number]: {
                background: any;
                borderRadius: number;
                color: any;
            };
        };
        "& .CalendarDay__default": {
            background: string;
            border: string;
            position: string;
            zIndex: any;
        };
        "& .CalendarDay__selected": {};
        "& .CalendarDay__selected:active:hover": {
            background: string;
        };
        "& .CalendarDay__selected:after": {
            background: any;
            borderRadius: string;
            content: string;
            height: string;
            position: string;
            width: string;
            zIndex: any;
            left: string;
            top: string;
            transform: string;
        };
        "& .CalendarDay__selected:active:after": {
            background: any;
            borderRadius: string;
            content: string;
            height: string;
            position: string;
            width: string;
            zIndex: any;
            left: string;
            top: string;
            transform: string;
        };
        "& .CalendarDay__selected:hover:after": {
            background: any;
            borderRadius: string;
            content: string;
            height: string;
            position: string;
            width: string;
            zIndex: any;
            left: string;
            top: string;
            transform: string;
        };
        "& .CalendarDay__selected_start:not(.CalendarDay__blocked_minimum_night):before": {
            background: string;
            content: string;
            display: string;
            height: string;
            position: string;
            right: number;
            top: number;
            width: string;
            zIndex: any;
        };
        "& .CalendarDay__defaultCursor:before": {
            display: string;
        };
        "& .CalendarDay__selected_span": {
            background: any;
            color: any;
        };
        "& .CalendarDay__selected_span.CalendarDay__lastDayOfWeek": {
            background: string;
        };
        "& .CalendarDay__selected_span.CalendarDay__firstDayOfWeek": {
            background: string;
        };
        "& .CalendarDay__selected_span:hover": {};
        "& .CalendarDay__selected_end": {
            borderRadius: string;
        };
        "& .CalendarDay__selected_end:before": {
            background: string;
            content: string;
            display: string;
            height: string;
            position: string;
            left: number;
            top: number;
            width: string;
            zIndex: any;
        };
        "& .CalendarDay__selected__hovered_span": {};
        "& .CalendarDay__selected__hovered_span:hover": {
            background: any;
            color: any;
        };
        "& .CalendarDay__selected__hovered_span ~  .CalendarDay__selected__defaultCursor:before": {
            display: string;
        };
        "& .CalendarDay__highlighted_calendar": {
            color: any;
        };
        "& .CalendarDay__highlighted_calendar:after": {
            counterIncrement: string;
            color: any;
            display: string;
            fontSize: string;
            content: string;
        };
        "& .CalendarDay__selected__highlighted_calendar": {
            color: any;
        };
        "& .CalendarDay__selected__highlighted_calendar:after": {
            color: any;
            content: string;
        };
        "& .CalendarMonthGrid__vertical_scrollable": {
            width: string;
            marginTop: string;
        };
        "& .CalendarMonth_table": {
            width: string;
        };
        "& .DayPickerKeyboardShortcuts_buttonReset": {
            display: string;
        };
        "& .DayPickerNavigation": {
            transform: string;
        };
        "& .DayPickerNavigation_nextButton__verticalDefault": {
            display: string;
        };
        "& .DayPickerNavigation_button__horizontalDefault": {
            background: string;
            border: string;
            borderRadius: string;
            padding: number;
            height: string;
            top: string;
            width: string;
        };
        "& .DayPickerNavigation_button__horizontalDefault svg": {
            display: string;
        };
        "& .DayPickerNavigation_leftButton__horizontalDefault": {
            backgroundImage: string;
            left: number;
        };
        "& .DayPickerNavigation_leftButton__horizontalDefault:active": {
            backgroundImage: string;
            backgroundRepeat: string;
            outline: string;
        };
        "& .DayPickerNavigation_rightButton__horizontalDefault": {
            backgroundImage: string;
            right: number;
            outline: string;
        };
        "& .DayPickerNavigation_rightButton__horizontalDefault:active": {
            backgroundImage: string;
            backgroundRepeat: string;
            backgroundPosition: string;
            outline: string;
        };
    };
};
