'use strict'
import message from '@euriklis/message'
export const header = (text, color = 'yellow') => {
    return new message().bold().italic().underscore()
        .setColor(color).append(text).append_white_space()
        .append(':\n').reset()
}
export const error_message = (text, color = 'blue') => {
    return new message().bold().set_color_red()
    .append_not_check_mark()
    .append_white_space().reset().setColor(color)
    .append(text).reset()
}
export const success_message = (text, color = 'cyan') => {
    return new message().bold().set_color_green()
    .append_check_mark().append_white_space().reset()
    .setColor(color).append(text).reset()
}